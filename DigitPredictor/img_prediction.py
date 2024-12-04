from transformers import BlipProcessor, BlipForConditionalGeneration
from PIL import Image

# Load processor and model globally
processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

def generate_caption(file) -> str:
    """
    Processes the uploaded image file and generates a caption using BLIP.
    Args:
        file (UploadFile): The uploaded image file.
    Returns:
        str: The generated caption.
    """
    # Read the uploaded file and convert it to a PIL Image
    image = Image.open(file)
    
    # Preprocess the image
    inputs = processor(image, return_tensors="pt")
    
    # Generate predictions
    outputs = model.generate(**inputs)
    
    # Decode and return the generated caption
    return processor.decode(outputs[0], skip_special_tokens=True)
