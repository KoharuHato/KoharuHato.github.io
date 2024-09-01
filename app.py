from flask import Flask, request, jsonify
import sympy
import re

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data['message']

    # Define the response
    if re.match(r'hello+|hi+|hey+', user_input, re.IGNORECASE):
        response = "Hi there! I'm your personal chatbot. How can I assist you today?"
    elif user_input.lower() == "exit":
        response = "Goodbye!"
    elif re.search(r'\bmath\b', user_input, re.IGNORECASE):
        query = user_input.replace('math', '').strip()
        try:
            result = sympy.sympify(query)
            response = str(result)
        except Exception as e:
            response = f"Error: {str(e)}"
    elif re.search(r'\bcode\b', user_input, re.IGNORECASE):
        response = "It looks like you're defining a function. Is there anything specific you need help with?"
    elif re.search(r'\btranslate\b', user_input, re.IGNORECASE):
        response = "Translation for 'text' (placeholder response)"
    else:
        response = "I'm not sure how to assist with this. Can you provide more details or ask a specific question?"

    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
