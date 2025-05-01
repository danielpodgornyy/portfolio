import readJSONArray from '../../utils/readJSONArray.js';
export async function getAllPostInfo() {
    try {
        let postInfoArray = await readJSONArray('json/blog.json');
        console.log(postInfoArray);
        // Only returns necessary data for each post
        return postInfoArray.map((postInfo) => {
            const { name, category, created } = postInfo;
            return { name, category, created };
        });
    }
    catch (error) {
        throw new Error(error);
    }
}
export async function getPostInfo(input_name) {
    try {
        let postInfoArray = await readJSONArray('json/blog.json');
        // Iterate through postInfo array and return the found project (if not found, then return null)
        for (const postInfo of postInfoArray) {
            if (postInfo.name === input_name) {
                return postInfo;
            }
        }
        return null;
    }
    catch (error) {
        throw new Error(error);
    }
}
