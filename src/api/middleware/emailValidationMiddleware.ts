import toast from "react-hot-toast";
import { FormDataProps } from "../../@types";
import { getSubscriptionByEmail } from "../services/subscriptionService";

export const emailValidationMiddleware = async (data: FormDataProps) => {
	const { email } = data;
	const subscriptions = await getSubscriptionByEmail(email);
	const errorMessage = "Já existe inscrição realizada neste e-mail";

	if (subscriptions.length > 0) {
		toast.error(errorMessage, { id: "email-already-exists" });
		return true;
	}

	return false;
};
