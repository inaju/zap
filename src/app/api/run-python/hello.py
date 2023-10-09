import pyautogui
import random
import time

def move_mouse_randomly():
    screen_width, screen_height = pyautogui.size()
    
    while True:
        random_x = random.randint(0, screen_width)
        random_y = random.randint(0, screen_height)
        
        pyautogui.moveTo(random_x, random_y, duration=1)
        
        # Sleep for a while before moving again (adjust as needed)
        time.sleep(random.randint(10, 50))

move_mouse_randomly()