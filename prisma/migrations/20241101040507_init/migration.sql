/*
  Warnings:

  - You are about to drop the `Students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Students";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "students_uuid_key" ON "students"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "students_email_key" ON "students"("email");
