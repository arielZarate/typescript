import React, { useState, useEffect } from "react";

// en vez de usar esta forma de importar cada uno individual,use el hooks
//import { UseSelector, useDispatch, useSelector } from "react-redux";
//import { RootState } from "../Redux/store";

//=======================   usamos en hooks customizado======================================
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { fetchUser, addUserToServer } from "../Redux/thunk/UserThunks";
const User = () => {
  // const user = useSelector((state: RootState) => state.UserSlices);
  const user = useAppSelector((state) => state.UserSlices);
  const dispatch = useAppDispatch();
  //=============formulario==================================

  const [data, setData] = useState({
    name: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //enviar datos
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //evitamos el recargue la pagina
    //console.log(data);

    /*
    dispatch(
      addUser({
        //id: crypto.randomUUID(),
        name: data.name,
        lastName: data.lastName,
      })
    );
   
   */
    dispatch(addUserToServer(data));
    setTimeout(() => {
      alert("add..");
      //seteo todo
      setData({
        name: "",
        lastName: "",
      });
    }, 1200);
  };

  //de aca despacholos adatos
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  //================================================

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Listado de Users
      </h2>

      {user &&
        user.map((u) => (
          <div
            key={u.id}
            style={{ display: "flex", gap: 2, justifyContent: "center" }}
          >
            <p>{u.name}</p>
            <p>{u.lastName}</p>
          </div>
        ))}

      {/*
==============================Formulario==================================================
*/}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "30px",
            gap: 1,
          }}
          onSubmit={handleSubmit}
        >
          <h2>Formulario User</h2>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            style={{
              margin: "4px 0px",
              padding: "8px",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
            onChange={(e) => handleChange(e)}
            value={data.name}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            style={{
              margin: "4px 0px",
              padding: "8px",
              borderRadius: "8px",

              fontWeight: "bold",
            }}
            onChange={handleChange}
            value={data.lastName}
          />

          <button
            type="submit"
            style={{
              margin: "4px 0px",
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: "#14b41c",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default User;
