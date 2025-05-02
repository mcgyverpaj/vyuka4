import Tesseract from 'tesseract.js'

export async function recognizeTextFromImage(image: string): Promise<string> {
  try {
    const { data: { text } } = await Tesseract.recognize(
      image, 
      'eng', 
      {
        logger: (m) => console.log(m), // Pro debugování procesu OCR
      }
    )
    return text
  } catch (error) {
    console.error('Chyba při rozpoznávání textu:', error)
    return ''
  }
}
