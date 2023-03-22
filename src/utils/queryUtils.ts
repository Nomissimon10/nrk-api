export const interfaceToQuery = (options: any | undefined) => {
    let queryParameter = ''
    if (options !== undefined) {
        const queryParameters = Object.keys(options)
        for (let i = 0; i < queryParameters.length; i++)
            if (options[queryParameters[i]])
                queryParameter +=
                    queryParameter.length > 0
                        ? `&${queryParameters[i]}=${
                              options[queryParameters[i]]
                          }`
                        : `${queryParameters[i]}=${options[queryParameters[i]]}`
    }

    return queryParameter
}
