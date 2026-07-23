

const username = "Teznon";
const repo = "Teznon.github.io";

fetch(`https://github.com/${username}/${repo}/commits/main`)
    .then(response => response.json())
    .then(data => {
        const commitDate = new Date(data.commit.author.date);

        const formatDate = commitDate.toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
        });

        document.getElementById('last-updated').textContent = `Last Updated: ${formatDate}`;
    })
    .catch(error => {
        console.error('Error fetching commit data:', error);
        document.getElementById('last-updated').textContent = 'Last Updated: Unable to fetch data';
    });