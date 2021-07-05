class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPopular() {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
                this.getRequestOptions
            );
            const result = await response.json();
            return result.items;
        } catch (error) {
            return console.log('error', error);
        }
    }
    async search(keyword) {
        try {
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=${this.key}`,
                this.RequestOptions
            );
            const result = await response.json();
            return result.items.map(item => ({ ...item, id: item.id.videoId }));
        } catch (error) {
            return console.log('error', error);
        }
    }

}
export default Youtube;