import React from 'react'

const Attack = ({characterMoves}) => {
    return (
        <>
        {characterMoves && (
            <div className="moves">
              {characterMoves.map((val, i) => {
                return <span key={i}>{val + " "}</span>;
              })}
            </div>
          )}
        </>
    )
}

export default Attack;
