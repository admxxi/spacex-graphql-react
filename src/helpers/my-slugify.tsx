import slugify from 'slugify'

export function mySlugify(str: string, encoded = false): string {
  let response = slugify(str, { strict: true })

  if (encoded === true) {
    response = encodeURIComponent(response)
  }

  return response
}
