import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postVideogame, getAllGenres } from "../redux/actions";
import { Link } from "react-router-dom";
import styles from "../styles/Create.module.css";


const Create = () => {
    const dispatch = useDispatch();
    
    const { genres, platforms } = useSelector((state) => state);

    const [form, setForm] = useState({
        name: "",
        released: "",
        description: "",
        rating: "",
        genres: [],
        platforms: [],
    })
    console.log(form);

    const [error, setError] = useState({});
    const [created, setCreated] = useState(false);
    const validator = (property, value) => {
        switch (property) {
            case "name":
                if (!/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/.test(value)) {
            setError({
                ...error,
                [property]:
                "El nombre no puede conterner los caracteres ($,@,%,#,etc)",
            });
            } else {
            delete error[property];
            setError({ ...error });
            }
            break;
        case "released":
            if (new Date().getTime() < new Date(value).getTime()) {
            setError({
                ...error,
                [property]: "Debes elegir una fecha realista.",
            });
            } else {
            delete error[property];
            setError({ ...error });
            }
            break;
        case "rating":
            if (Number(value) < 0 || Number(value) > 5) {
            setError({
                ...error,
                [property]: "El rating debe ser un numero del 1 al 5.",
            });
            } else {
            delete error[property];
            setError({ ...error });
            }
            break;
        case "genres":
            if (typeof value === "string") {
            if (!genres.map((genero) => genero.name).includes(value)) {
                setError({
                ...error,
                [property]: "No es un genero valido.",
                });
            } else {
                delete error[property];
                setError({ ...error });
            }
            } else {
            if (
                value
                .map((input) =>
                    genres.map((genero) => genero.name).includes(input)
                )
                .includes(false)
            ) {
                setError({
                ...error,
                [property]: "No es un genero valido.",
                });
            } else {
                delete error[property];
                setError({ ...error });
            }
            }
            break;
        case "platforms":
            if (typeof value === "string") {
            if (!platforms.includes(value)) {
                setError({
                ...error,
                [property]: "No es una plataforma valida.",
                });
            } else {
                delete error[property];
                setError({ ...error });
            }
            } else {
            if (value.map((input) => platforms.includes(input)).includes(false)) {
                setError({
                ...error,
                [property]: "No es una plataforma valida.",
                });
            } else {
                delete error[property];
                setError({ ...error });
            }
            }

            break;
        default:
            setError({ ...error });
            break;
        }
    };

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])

    const handlerChange = (e) => {
        e.preventDefault();
        setCreated();
        const property = e.target.name;
        const value = e.target.value;

        validator(property, value);

        if (value) {
        if (property === "genres" || property === "platforms") {
            if (form[property]?.includes(value))  {
            setForm({ ...form });
            } else {
                if (form[property]?.length === undefined) {
                    setForm({ ...form, [property]: [value] });
                } else {
                    setForm({ ...form, [property]:  [ ...form[property], [value]] });
                }
            }
        } else setForm({ ...form, [property]: value });
        }
        if (!value) {
            setForm({ ...form, [property]: "" });
          }
    };

    const handlerSubmit = async (e) => {
        e.preventDefault();
        const properties = Object.keys(form);
        const values = Object.values(form);

        for (let i = 0; i < properties.length; i++) {
        validator(properties[i], values[i]);
        }

        if (Object.keys(error).length) {
        console.log("Hay errores");
        } else {
        // let nuevoGenres = [];
        // for (let objeto of genres) {
        //     if (form.genres?.includes(objeto.name)) {
        //     nuevoGenres.push(objeto.id);
        //     }
        // }
        await dispatch(postVideogame({ ...form }));
        setCreated(true);
        setForm({
            name: "",
            released: "",
            rating: "",
            description: "",
            genres: [],
            platforms: [],
        });
        }
        setError({});
    };

    return (
        <body className={styles.body}>
        <div className={styles.div}>
        <Link to="/home">
            <button className={styles.back}></button>
        </Link>
        <h3>Add a videogame</h3>
        <form onSubmit={handlerSubmit}>
            <div>
            <label for="name">Name: </label>
            <input
                name="name"
                type="text"
                value={form.name}
                onChange={handlerChange}
            />
            </div>
            <div>
            <label for="released">Released: </label>
            <input
                name="released"
                type="date"
                value={form.released}
                min="1950-01-01"
                max={new Date().toISOString().split("T")[0]}
                onChange={handlerChange}
            />
            </div>
            <div>
            <label for="rating">Rating: </label>
            <p>{form.rating}</p>
            <input
                name="rating"
                type="range"
                min={0}
                max={5}
                value={form.rating}
                onChange={handlerChange}
            />
            </div>
            <div>
            <label for="genres">Genres: </label>
            <input
                name="genres"
                type="text"
                value={form.genres?.join(", ")}
            />
            <select name="genres" onChange={(e) => handlerChange(e)}>
                <option value="">Select genres</option>
                {genres &&
                genres.map((genero, id) => {
                    return <option value={genero.name}>{genero.name}</option>;
                })}
            </select>
            <div className={styles.contenedorOptions}>
                {form.genres &&
                form.genres.map((genero) => {
                    return (
                    <div>
                        <p>{genero}</p>
                        <button
                        value={genero}
                        onClick={(e) => {
                            let nuevoGenres = form.genres.filter(
                            (genero) => genero !== e.target.value
                            );
                            setForm({ ...form, genres: nuevoGenres });
                        }}
                        >
                        X
                        </button>
                    </div>
                    );
                })}
            </div>
            </div>
            <div>
            <label for="platforms">Platforms: </label>
            <input
                name="platforms"
                type="text"
                value={form.platforms?.join(", ")}
            />
            <select name="platforms" onChange={(e) => handlerChange(e)}>
                <option value="">Select platform</option>
                {platforms &&
                platforms.map((plataforma) => {
                    return <option value={plataforma}>{plataforma}</option>;
                })}
            </select>
            <div className={styles.contenedorOptions}>
                {form.platforms &&
                form.platforms.map((platform) => {
                    return (
                    <div>
                        <p>{platform}</p>
                        <button
                        value={platform}
                        onClick={(e) => {
                            let nuevoPlatforms = form.platforms.filter(
                            (plat) => plat !== e.target.value
                            );
                            setForm({ ...form, platforms: nuevoPlatforms });
                        }}
                        >
                        X
                        </button>
                    </div>
                    );
                })}
            </div>
            </div>
            <div>
            <label for="description">Description: </label>
            <textarea
                name="description"
                type="textt"
                value={form.description}
                onChange={handlerChange}
            />
            </div>
            {error &&
            Object.values(error).map((error) => {
                return <p>* {error}</p>;
            })}
            {created && <p>Se ha creado correctamente.</p>}
            <button
            className={styles.button}
            type="submit"
            disabled={
                !form.name ||
                !form.released ||
                !form.rating ||
                !form.genres?.length ||
                !form.platforms?.length ||
                !Object.keys(error)
            }
            >
            Create
            </button>
        </form>
        </div>
        </body>
    );
};

export default Create;