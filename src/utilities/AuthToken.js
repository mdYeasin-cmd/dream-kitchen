export const AuthToken = async (user) => {
    const currentUser = {
        email: user.email
    }

    fetch('http://localhost:5000/jwt', {
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