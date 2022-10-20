import React from "react";
import { Link } from "react-router-dom";

function Card({estilo,banda,capa,id}){

return(
    <div className="tabela">
                <table>
                    <thead>
                        <tr>
                            <td>{estilo}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link to = {"/Playlist/" + id}> <img src={capa}/></Link>
                                <h3>{banda}</h3>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
);
    
}
export default Card;