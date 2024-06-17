import React, { useEffect, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { PSBT } from './pages/PSBT';
import { Bitcoin } from './pages/Bitcoin';
import Typography from "./pages/Typography";
import "./App.module.css";

// import { TransactionIcon } from './TxnIcon';

function App() {
	/* Router */

	const router = createBrowserRouter([
    {
      path: "/",
      element: <Bitcoin />,
    },
		{
      path: "/bitcoin/:txn?",
      element: <Bitcoin />,
    },
    // other pages....
    {
      path: "/psbt/:psbt?",
      element: <PSBT />,
    },
		{
			path: "/typography",
			element: <Typography />
		},
  ])

	return (
		<RouterProvider router={router} />
	);
}

export default App;

