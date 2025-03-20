# Use official Python image
FROM python:3.9

# Set the working directory inside the container
WORKDIR /app

# Copy everything into the container
COPY . .

# Install dependencies
RUN pip install -r requirements.txt

# Expose Flask app's port
EXPOSE 7000

# Run the Flask app
CMD ["python", "app.py"]

