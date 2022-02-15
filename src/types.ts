export interface tfObjectEntry {
  /**
 * @param name - Name of item 
 * @param image_name - Name of the image file for this item
 * @param schema - Item schema number
 * 
 */
  name: string,
  image_name: string,
}

export interface tfEffectEntry extends tfObjectEntry {
  schema: number
}

export interface tfItemEntry extends tfObjectEntry {
  schema: number,
  strangifier_schema?: number,
  paint_kit_num?: number,
}