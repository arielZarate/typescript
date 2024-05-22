import { addUser, setUser } from "../feactures/user/UserSlices";
import { AppDispatch } from "../store";

//debemos usar convenientemente una variable de entorno
let uri = "http://localhost:3001/api/user";

const fetchUser = () => async (dispatch: AppDispatch) => {
  try {
    const res = await fetch(uri);
    const users = await res.json(); //la nfo esta en json() si es axios se usa .data();

    //aca despacho la  funcion
    dispatch(setUser(users));
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

// Función para agregar un usuario
const addUserToServer = (user: { name: string; lastName: string }) => {
  return async (dispatch: AppDispatch) => {
    const res = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error("Failed to add user");
    }
    const newUser = await res.json();

    dispatch(addUser(newUser));
    return newUser;
  };
};

export { fetchUser, addUserToServer };
