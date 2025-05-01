import readJSONArray from '../../utils/readJSONArray.js';
import { Post, SlimPost } from './blog.model.js';

export async function getAllPostInfo(): Promise<Array<SlimPost>>  {
  try {
    let postInfoArray: Array<Post> = await readJSONArray<Post>('json/blog.json')
    console.log(postInfoArray)

    // Only returns necessary data for each post
    return postInfoArray.map((postInfo) => {
      const { name, category, created } = postInfo;

      return { name, category, created };
    })
  } catch(error: any) {
    throw new Error(error)
  }
}

export async function getPostInfo(input_name: string): Promise<Post | null>  {
  try {
    let postInfoArray: Array<Post> = await readJSONArray<Post>('json/blog.json')

    // Iterate through postInfo array and return the found project (if not found, then return null)
    for (const postInfo of postInfoArray) {
      if (postInfo.name === input_name) {
        return postInfo;
      }
    }

    return null;
  } catch(error: any) {
    throw new Error(error)
  }
}
