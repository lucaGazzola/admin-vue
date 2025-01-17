import { apiClient, tryRequest } from '@/api'

/*
 * This service is used to send files down to the rabbit hole.
 * Meaning this service sends files to the backend.
 */
const RabbitHoleService = Object.freeze({
  sendFile: async (file: File) => {
    const result = await tryRequest(
      apiClient.api.rabbitHole.uploadFile({ file }), 
      `File ${file.name} successfully sent down the rabbit hole`, 
      "Unable to send the file to the rabbit hole",
      "Sending a file to the rabbit hole"
    )
    return result.data
  },
  sendWeb: async (url: string) => {
    const result = await tryRequest(
      apiClient.api.rabbitHole.uploadUrl({ url }), 
      "Website successfully sent down the rabbit hole", 
      "Unable to send the website to the rabbit hole",
      "Sending a website content to the rabbit hole"
    )
    return result.data
  },
  sendMemory: async (file: File) => {
    const result = await tryRequest(
      apiClient.api.rabbitHole.uploadMemory({ file }), 
      "Memories file successfully sent down the rabbit hole", 
      "Unable to send the memories to the rabbit hole",
      "Sending a bunch of memories to the rabbit hole"
    )
    return result.data
  },
})

export default RabbitHoleService
