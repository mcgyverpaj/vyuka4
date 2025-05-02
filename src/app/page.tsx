'use client'

import { useState } from 'react'
import { recognizeTextFromImage } from '../utils/ocr'

export default function HomePage() {
  const [image, setImage] = useState<File | null>(null)
  const [text, setText] = useState<string>('')

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImage(file)
    }
  }

  const handleRecognizeText = async () => {
    if (image) {
      const text = await recognizeTextFromImage(URL.createObjectURL(image))
      setText(text)
    }
  }

  return (
    <main>
      <h1>Vítej v OCR aplikaci</h1>
      <p>Vyber obrázek pro rozpoznání textu.</p>

      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={handleRecognizeText} disabled={!image}>Rozpoznej text</button>

      {text && (
        <div>
          <h2>Rozpoznaný text:</h2>
          <pre>{text}</pre>
        </div>
      )}
    </main>
  )
}
