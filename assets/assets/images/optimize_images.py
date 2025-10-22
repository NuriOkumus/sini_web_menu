from PIL import Image
import os
import glob

# Tüm jpg dosyalarını bul
for img_path in glob.glob("*.jpg"):
    try:
        # Görseli aç
        img = Image.open(img_path)
        
        # Orijinal boyutu al
        original_size = os.path.getsize(img_path)
        
        # Max genişlik/yükseklik 800px olarak ayarla
        max_size = 800
        img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
        
        # Optimize edilmiş olarak kaydet (kalite %75)
        img.save(img_path, "JPEG", quality=75, optimize=True)
        
        # Yeni boyutu al
        new_size = os.path.getsize(img_path)
        reduction = ((original_size - new_size) / original_size) * 100
        
        print(f"{img_path}: {original_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({reduction:.1f}% azalma)")
        
    except Exception as e:
        print(f"Hata {img_path}: {e}")

print("\nOptimizasyon tamamlandı!")
