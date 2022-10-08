import React from "react";
import { Link } from "react-router-dom";

function Card({estilo,banda,capa,link}){

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
                                <h3>{banda}</h3>
                                <Link to = {"/Playlist/" + link}> <img src={capa}/></Link>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
);
    
}
export default Card;