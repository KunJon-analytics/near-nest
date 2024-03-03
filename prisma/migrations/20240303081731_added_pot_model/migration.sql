-- CreateTable
CREATE TABLE "Pot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "availableBounty" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pot_name_key" ON "Pot"("name");

-- CreateIndex
CREATE INDEX "Pot_name_idx" ON "Pot"("name");
