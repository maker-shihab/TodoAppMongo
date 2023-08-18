import { IGenericErrorMessage } from "./error.interface";

export type IGenricErrorResponse = {
  statusCode: number;
  message: string;
  errorMessage: IGenericErrorMessage;
};
