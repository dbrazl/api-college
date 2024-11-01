-- CreateTable
CREATE TABLE "Students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "score" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_uuid_key" ON "Students"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");
