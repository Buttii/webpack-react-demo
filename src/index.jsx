import React, { Suspense } from "react"

import ReactDOM from "react-dom"

import App from "./App"





ReactDOM.render(
    <Suspense fallback={<div>loading...</div>}>
        <App></App>
    </Suspense>    ,
    document.getElementById("root")
)