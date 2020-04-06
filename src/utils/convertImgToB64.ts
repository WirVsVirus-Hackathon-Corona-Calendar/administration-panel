/**
 * Converts a img (file) into a base 64 string.
 */
export async function convertImgToB64(file: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      // TODO: Find a better solution
      if (typeof reader.result !== 'string') return;

      const imgAsB64 = reader.result?.replace(/^data:.+;base64,/, '');

      resolve(imgAsB64);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
}
