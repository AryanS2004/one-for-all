from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import dns.resolver
import google.generativeai as genai
import requests

# 🌟 Gemini API Key (Replace with your actual API key)
GEMINI_API_KEY = "AIzaSyChog8HBbu0IlEluONxiZMyIkGrk-gSI1A"
genai.configure(api_key=GEMINI_API_KEY)

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)

# ✅ Serve homepage
@app.route("/")
def serve_index():
    return send_from_directory(".", "index.html")

# ✅ Serve static pages (e.g., /tools/chatbot.html)
@app.route("/<path:filename>")
def serve_static(filename):
    return send_from_directory(".", filename)

# ✅ Cyber Safety ChatBot endpoint
@app.route("/ask_bot", methods=["POST"])
def ask_bot():
    data = request.json
    question = data.get("question")
    country = data.get("country", "general")

    if not question:
        return jsonify({"error": "No question provided."})

    prompt = f"""
You are Ultra Guard, a cyber safety assistant.
Only respond to questions about cybersecurity, privacy, online scams, phishing, ransomware, ethical hacking, news related to cybersecurity, or safety tools.
Tailor your answers based on the user's country: {country}.
If a question is unsafe or irrelevant, politely say you cannot answer it.
Now, here’s the user’s question: {question}
"""

    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        return jsonify({"answer": response.text.strip()})
    except Exception as e:
        return jsonify({"error": str(e)})

# ✅ Domain Spoof Checker endpoint
@app.route("/check_spoof")
def check_spoof():
    domain = request.args.get("domain")
    if not domain:
        return jsonify({"error": "No domain provided."})

    result = {}

    # Check SPF record
    try:
        txt_records = dns.resolver.resolve(domain, 'TXT')
        spf_records = [r.to_text().strip('"') for r in txt_records if r.to_text().startswith('"v=spf1')]
        result["spf"] = spf_records[0] if spf_records else None
    except Exception:
        result["spf"] = None

    # Check DMARC record
    try:
        dmarc_domain = f"_dmarc.{domain}"
        dmarc_txt = dns.resolver.resolve(dmarc_domain, 'TXT')
        dmarc_record = [r.to_text().strip('"') for r in dmarc_txt if r.to_text().startswith('"v=DMARC1')]
        result["dmarc"] = dmarc_record[0] if dmarc_record else None
    except Exception:
        result["dmarc"] = None

    return jsonify(result)

# ✅ RSS Feed Proxy (to fix CORS error in news.html)
@app.route("/fetch_feed")
def fetch_feed():
    feed_url = request.args.get("url")
    if not feed_url:
        return jsonify({"error": "Missing URL"}), 400

    try:
        response = requests.get(feed_url, timeout=5)
        response.raise_for_status()
        return jsonify({"contents": response.text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ✅ Run Flask app
if __name__ == "__main__":
    import os
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
