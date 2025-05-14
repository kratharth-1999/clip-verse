import { useState, useCallback } from "react";

const useGet = () => {
    const [stateOfGetRequest, setStateOfGetRequest] = useState({
        data: null,
        gettingData: false,
        getDataError: null,
    });

    const getData = useCallback(
        async (url, headers = {}, options = {}, withoutJSON = false) => {
            setStateOfGetRequest((prevState) => ({
                ...prevState,
                data: null,
                gettingData: true,
                getDataError: null,
            }));
            try {
                const responseSync = await fetch(url, {
                    headers: {
                        "content-type": "application/json",
                        ...headers,
                    },
                    ...options,
                });
                const response = withoutJSON
                    ? await responseSync.text()
                    : await responseSync.json();
                if (!responseSync.ok) {
                    throw new Error(
                        response.status_message ||
                            `HTTP error! status: ${responseSync.status}`
                    );
                }
                setStateOfGetRequest((prevState) => ({
                    ...prevState,
                    data: response,
                }));
            } catch (error) {
                setStateOfGetRequest((prevState) => ({
                    ...prevState,
                    getDataError: error.message || String(error),
                }));
            } finally {
                setStateOfGetRequest((prevState) => ({
                    ...prevState,
                    gettingData: false,
                }));
            }
        },
        [setStateOfGetRequest]
    );

    return {
        stateOfGetRequest,
        getData,
    };
};

export default useGet;
