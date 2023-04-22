import { getSeriesSeason, getTVSeries } from "../modules"

export const getAllSeasonsFromShow = async (showId: string): Promise<any> => {
    const seasons = (await getTVSeries(showId))._links.seasons

    const endResult: any = {}

    for (const season of seasons) {
        const seasonData = await getSeriesSeason(showId, season.name)
        endResult[`Season: ${season.name}`] = seasonData
    }

    return endResult
}

export const getShowEpisodes = async (showId: string): Promise<any> => {
    const data = await getAllSeasonsFromShow(showId)

    const endResult: any = []
    for (let seasonName of Object.keys(data)) {
        console.log(seasonName)
        const seasonData = data[seasonName]
        if (seasonData?._embedded?.episodes === undefined) continue
        for (let episode of seasonData._embedded.episodes)
            endResult.push(episode)
    }

    return endResult
}