import request from "supertest";
import app from "../index.js";
import { describe, it, expect } from "vitest";

describe("GET /", () => {
  it("should return message", async () => {
    // 👈 Logs the DB_URL to check if the workflow environment variable is injected correctly
    console.log("DEBUG - Current DATABASE_URL:", process.env.DATABASE_URL);

    const res = await request(app).get("/");
    expect(res.body.message).toBe("CI/CD is working!");
  });
});
