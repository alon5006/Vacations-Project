-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: vacations
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `user_type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'alon','puri','alon5@gmail.com','99fe586fa26fb7bb6c5cd8030f93f142','user'),(2,'alon','puri','alon51@gmail.com','99fe586fa26fb7bb6c5cd8030f93f142','user'),(3,'Alon','Puri','alon123@gmail.com','8cd7b4fd7528824db97ce0eb34532ba8','user'),(4,'Alon','Puri','alon12345@gmail.com','8cd7b4fd7528824db97ce0eb34532ba8','user'),(5,'Alon','Puri','aa@aaa.com','cdbbd061291eadad3a9fde24e2bfd823','user'),(6,'Alon','Puri','liat5@gmail.com','1db5009ded6fa055c2c4307672c1d4fa','user'),(7,'alon','puri','alon151@gmail.com','99fe586fa26fb7bb6c5cd8030f93f142','admin'),(8,'Lilil','Lilil','lilil@lilil.com','2e021b97c4df496e73db19d4b34297c0','user'),(9,'Alon','Puri','abc@gmail.com','ed46435ba61532fe4e69fe8a1883359d','user'),(12,'Alon','Puri','a@a.com','ed46435ba61532fe4e69fe8a1883359d','user'),(15,'Alon','Puri','o@o.com','4338d11feddd6623609d8ce25e422897','user'),(16,'Alon','Puri','w@g.co','bad13b7a3df855bfaf76b9da200e653b','user'),(17,'alon','puri','alon@gmail.com','3ae610bc2eff82bc4d8bd81c082b0b93','user'),(18,'Alon','Puri','aa@aa.com','7b0c0c350f46e0b998688f012befd02a','user'),(19,'Alon','Puri','alon@gnail.com','08aa37ef68cd0dc54170d0b4aced2c8c','user'),(20,'Alon','Puri','alonpuri@gmail.com','ed46435ba61532fe4e69fe8a1883359d','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-17 23:46:55
