import React, { useContext, useState, useEffect, useRef } from "react";

import { AuthContext } from "./context";
import ChatClass from './ChatClass';
import { Loading } from './Loading';

export const Chat = ({ navigation }) => {

	const { name } = useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
		setIsLoading(false);
		}, 1500);
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<ChatClass name={name} />
	);
};