"use client";
import {
  Button,
  Control,
  FieldInput,
  FieldSlug,
  FieldPassword,
} from "frui/react";

import { useHome, PASSWORD_RULES } from "@/modules/home";

/*
 * Password Rules
 * - must not be blank
 * - must contain 1 uppercase letter
 * - must contain 1 number
 * - must contain 1 symbol
 */
export default function Home() {
  const {
    updateIsLogin,
    updateUsername,
    updatePassword,
    updateConfirmPassword,
    error,
    isLogin,
    isSame,
    password,
  } = useHome();
  const { status, message } = error;

  return (
    <main className="min-w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* AUTH MODAL */}
      <section className="w-full max-w-[600px] bg-white p-12 md:p-24 rounded-lg drop-shadow-lg text-black m-4">
        <h1 className="text-center font-bold text-4xl mb-4 text-cyan-500">
          frui.
        </h1>

        {/* HANDLE LOGIN / SIGNUP TOGGLES */}
        {isLogin ? (
          <div className="w-full justify-center flex mb-4">
            <Button className="bg-cyan-500 text-white border-cyan-500" md>
              Login
            </Button>
            <Button md onClick={() => updateIsLogin(false)}>
              Sign Up
            </Button>
          </div>
        ) : (
          <div className="w-full justify-center flex mb-4">
            <Button md onClick={() => updateIsLogin(true)}>
              Login
            </Button>
            <Button className="bg-cyan-500 text-white border-cyan-500" md>
              Sign Up
            </Button>
          </div>
        )}

        {/* LOGIN FIELDS */}
        {isLogin ? (
          <div>
            <Control>
              <FieldSlug
                className="mb-4"
                placeholder="Username"
                onUpdate={updateUsername}
              />
            </Control>

            {status ? (
              <Control error={message}>
                <FieldPassword
                  placeholder="Password"
                  error={status}
                  onUpdate={updatePassword}
                />
              </Control>
            ) : (
              <Control>
                <FieldPassword
                  placeholder="Password"
                  error={status}
                  onUpdate={updatePassword}
                />
              </Control>
            )}

            {/* PASSWORD RULES */}
            {status && (
              <div className="w-full text-gray-400 text-xs mt-4">
                {PASSWORD_RULES.map((e, idx) => (
                  <p key={idx}>*{e.message}</p>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div>
              <Control>
                <FieldSlug
                  className="mb-4"
                  placeholder="Username"
                  onUpdate={updateUsername}
                />
              </Control>

              {status ? (
                <Control error={message}>
                  <FieldPassword
                    placeholder="Password"
                    error={status}
                    onUpdate={updatePassword}
                  />
                </Control>
              ) : (
                <Control>
                  <FieldPassword
                    placeholder="Password"
                    error={status}
                    onUpdate={updatePassword}
                  />
                </Control>
              )}

              {/* PASSWORD RULES */}
              {status && (
                <div className="w-full text-gray-400 text-xs mt-4">
                  {PASSWORD_RULES.map((e, idx) => (
                    <p key={idx}>*{e.message}</p>
                  ))}
                </div>
              )}

              {isSame ? (
                <Control className="mt-4">
                  <FieldPassword
                    placeholder="Confirm Password"
                    onUpdate={updateConfirmPassword}
                  />
                </Control>
              ) : (
                <Control className="mt-4" error="Passwords must be the same">
                  <FieldPassword
                    placeholder="Confirm Password"
                    error={!isSame}
                    onUpdate={updateConfirmPassword}
                  />
                </Control>
              )}
            </div>
          </div>
        )}
        {/* SIGNUP FIELDS */}

        {/* CTA BUTTON */}
        <Button
          className="w-full mt-4 bg-cyan-500 text-white border-cyan-500"
          md
        >
          {isLogin ? "Login" : "Get Started"}
        </Button>
      </section>
    </main>
  );
}
