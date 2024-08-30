<div className="loginDiv" style={{ display: "none" }}>
  <h1 className="heading" style={{ fontSize: "4rem" }}>
    Login
  </h1>

  <form
    onSubmit={handleSubmit(formSubmit)}
    action="#"
    noValidate
    className="form"
  >
    <div className="input">
      {/* <label htmlFor="email">Email:</label> */}
      <MdOutlineMarkEmailRead />
      <input
        type="text"
        id="email"
        {...register("email", {
          required: {
            value: true,
            message: "Please provide email address ",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
        name="email"
        placeholder="Email"
      />
    </div>
    <p className="tiny">{errors.email?.message}</p>
    <div className="input">
      {/* <label htmlFor="password">Password:</label> */}
      <MdLockOutline />
      <input
        type="password"
        id="password"
        {...register("password", {
          required: {
            value: true,
            message: "Please provide password",
          },
        })}
        name="password"
        placeholder="Password"
      />
    </div>
    <p className="tiny">{errors.password?.message}</p>
    <p>
      Don't have account ?{" "}
      <button style={{ color: "#fdca00" }}>Register</button>
    </p>
    <div className="">
      <Btn type={"submit"} text={"Login"} />
    </div>
  </form>

  <DevTool control={control} />
</div>;
