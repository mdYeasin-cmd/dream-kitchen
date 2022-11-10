export const AuthToken = async (user) => {
    const currentUser = {
        email: user.email
    }

    fetch('https://dream-kitchen-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('dream-kitchen-token', data.token);
        })
        .catch(error => console.error(error));
}