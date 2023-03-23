/**
 * Converts an interface to a query string
 * @param {interface} options - The interface to convert
 * @returns {string} The query string
 */
export const interfaceToQuery = (options: any | undefined): string => {
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
