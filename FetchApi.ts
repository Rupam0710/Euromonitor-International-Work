class FetchApi {

    public showUserDetails = async (id: number) => {
        try {
            const response = await fetch(`https://reqres.in/api/users/${id}`);
            const user = await response.json();

            const userList: HTMLDivElement = document.getElementById('user-list') as HTMLDivElement;
            userList.textContent = '';
            const userDiv: HTMLDivElement = document.createElement('div');

            userDiv.innerHTML = `
                <h2>${user.data.first_name} ${user.data.last_name}</h2>
                <p>Email: ${user.data.email}</p>
                <img key=${user.data.avatar} src=${user.data.avatar}>
                <hr />
            `;
            userList.appendChild(userDiv);


        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    }

    public fetch_api = async () => {
        try {
            const response = await fetch(`https://reqres.in/api/users/`);
            const user = await response.json();

            const userList: HTMLDivElement = document.getElementById('user-list') as HTMLDivElement;


            user.data.forEach((user: any) => {
                const userDiv: HTMLDivElement = document.createElement('div');
                userDiv.innerHTML = `
                <h2>${user.first_name} ${user.last_name}</h2>
                <p>Email: ${user.email}</p>
                <img key=${user.avatar} src=${user.avatar}>
                <hr />
            `;
                userDiv.onclick = () => this.showUserDetails(user.id);
                userList.appendChild(userDiv);
            });

        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    }
}

const fetchapi = new FetchApi();

fetchapi.fetch_api();