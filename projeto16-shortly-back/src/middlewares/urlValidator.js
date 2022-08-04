import urlSchema from "../schemas/urlsSchema.js";

export async function validateUrl(req, res, next) {
  const { body } = req;
  const { userId } = res.locals;

  const { error } = urlSchema.validate(body, { abortEarly: false });

  if (error) {
    return res.status(422).send(error.details.map((err) => ({ message: err.message })));
  }

  res.locals.data = {
    userId,
    url: body.url,
  };

  next();
}

export async function validateOther(req, res, next) {
  //
}
