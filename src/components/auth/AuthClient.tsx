"use client";

import React from "react";
import {
  Authenticator,
  Button,
  CheckboxField,
  Heading,
  Image,
  Text,
  useAuthenticator,
  useTheme,
  View,
} from "@aws-amplify/ui-react";

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image className="rounded-full" alt="Amplify logo" src="/avatar.png" />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          LuciTalk &copy; All Rights Reserved
        </Text>
      </View>
    );
  },

  SignIn: {
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center" paddingBottom="relative.xs">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    FormFields() {
      const { validationErrors } = useAuthenticator();

      return (
        <>
          {/* Re-use default `Authenticator.SignUp.FormFields` */}
          <Authenticator.SignUp.FormFields />

          {/* Append & require Terms and Conditions field to sign up  */}
          <CheckboxField
            errorMessage={validationErrors.acknowledgement as string}
            hasError={!!validationErrors.acknowledgement}
            name="acknowledgement"
            value="yes"
            required
            label="I agree with the Terms and Conditions"
          />
        </>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center" paddingBottom="relative.xs">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {},
  SetupTotp: {},
  ConfirmSignIn: {},
  ForgotPassword: {},
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
    },
  },
  signUp: {
    password: {
      label: "Password:",
      placeholder: "Enter your Password:",
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: "Confirm Password:",
      order: 3,
    },
    email: {
      lable: "Email",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Enter your Password:",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "Enter your email:",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enter your Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Enter your Password Please:",
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Enter your Confirmation Code:",
      isRequired: false,
    },
  },
};

export default function AuthClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-full">
      <Authenticator
        // socialProviders={["google", "apple"]}
        formFields={formFields}
        components={components}
      >
        {children}
      </Authenticator>
    </div>
  );
}
