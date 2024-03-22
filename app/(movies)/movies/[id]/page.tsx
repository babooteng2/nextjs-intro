import { API_URL } from "../../../(home)/page";

async function getMovie(id:String) {
    console.log(`Fetching movies: ${Date.now()}`)    
    await new Promise(respose => setTimeout(respose, 5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id:String) {
    console.log(`Fetching videos: ${Date.now()}`)    
    await new Promise(respose => setTimeout(respose, 5000));
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieDetail({
    params: {id},
}: {
    params: {id: string};
}) {    
    //await new Promise(respose => setTimeout(respose, 10000));
    console.log("start fetching");
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    console.log("end fetching");
    return (
        <>
        <h1>{movie.title}</h1>
        <div>
            <ul>
                {videos.map( (video) => 
                    <li key={video.key}>
                        {video.name}
                    </li>
                )}
            </ul>
        </div>
        </>
    )
}