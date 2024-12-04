import torch
from torchvision import transforms
from PIL import Image
from SimpleNN import SimpleNN

# Specify the device
device = (
    "cuda"
    if torch.cuda.is_available()
    else "mps"
    if torch.backends.mps.is_available()
    else "cpu"
)

# Load the saved model
model = SimpleNN().to(device)
model.load_state_dict(torch.load('digit_predictor_model.pth', weights_only=True))
model.eval()

# Define transform to be applied to input image
transform = transforms.Compose([
    transforms.Grayscale(num_output_channels=1),  # Ensure the image is in grayscale
    transforms.Resize((28, 28)),  # Resize to the same as MNIST images
    transforms.ToTensor(),  # Convert to tensor
    transforms.Normalize((0.5,), (0.5,)),  # Normalize to match training data
])

def predict(file):
    # Load and transform the image
    image = Image.open(file)
    image = transform(image)
    image = image.unsqueeze(0)  # Add batch dimension
    image = image.to(device)

    with torch.no_grad():
        output = model(image)
        _, predicted = torch.max(output, 1)
        return predicted.item()

# Preprocess your own image
# image_path = 'numbers\\1.png'
# predicted_digit = predict(image_path, model, device)
# print(f'The predicted digit is: {predicted_digit}')