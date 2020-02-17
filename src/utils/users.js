const users = []

const addUser = ({ id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // Validate data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username == username
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return {
        user
    }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        // remove the user and return it
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    // const index = users.findIndex((user) => user.id === id)
    // if (index === -1) {
    //     return undefined
    // }

    // return users[index]

    return users.find((user) => user.id === id)

}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room.toLowerCase())
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
