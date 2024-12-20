const ROUTES = {
    subredditRoute: (subreddit) => `/r/${subreddit}`,
    fullPostRoute: (subreddit, postId, postTitle) => `/r/${subreddit}/comments/${postId}/${postTitle}`,
    searchRoute: () => `/search`
};

export default ROUTES;