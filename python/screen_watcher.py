import pytesseract
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
import cv2
import numpy as np
import pyautogui
import json
import time
import os

def capture_and_ocr():
    # Take screenshot
    screenshot = pyautogui.screenshot()
    image = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)

    # Run OCR
    text = pytesseract.image_to_string(image)
    return text

if __name__ == "__main__":
    while True:
        ocr_result = capture_and_ocr()
        print(json.dumps({ "screen_text": ocr_result }), flush=True)
        time.sleep(5)  # capture every 5 seconds
