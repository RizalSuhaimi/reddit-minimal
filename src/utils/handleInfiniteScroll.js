const handleInfiniteScroll = (dispatch, isLoadingFetch, fetchCall, fetchCallName, fetchArguments, stopInfiniteScroll) => {
    return () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoadingFetch || stopInfiniteScroll) {

            return;
        }

        // Dispatch action to load more posts when use scrolls to the bottom
        let after = null;
        switch (fetchCallName) {
            case "loadRedditPosts":
                let { subreddit="popular" } = fetchArguments;
                after = fetchArguments.after || null;
                dispatch(fetchCall({ subreddit, after }));
                break;
            case "loadSubreddits":
                after = fetchArguments.after || null;
                dispatch(fetchCall({ after }));
                break;
            case "runSearch":
                let { searchTerm, searchConstraint } = fetchArguments;
                after = fetchArguments.after || null;
                dispatch(fetchCall({ searchTerm, searchConstraint, after }))
                break;
            default:
                throw new Error(`${fetchCallName} Fetch command does not exist.`)
        }
    }
};

export default handleInfiniteScroll;