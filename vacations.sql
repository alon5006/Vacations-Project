CREATE DATABASE  IF NOT EXISTS `vacations` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vacations`;
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
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `user_id` bigint NOT NULL,
  `vacation_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (2,4),(3,5),(4,6),(5,7),(6,7),(6,8),(6,9),(7,9),(8,9),(10,3),(10,1),(10,9),(10,5),(10,4),(10,6),(10,8),(10,7),(10,2),(11,3),(11,4),(11,5),(11,7),(11,1),(11,2),(11,6),(11,8),(0,37),(15,37),(12,37),(12,1),(12,3),(12,8),(12,7),(12,5),(12,4),(12,6),(17,1),(17,3),(19,8);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

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

--
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `vacation_id` bigint NOT NULL AUTO_INCREMENT,
  `destination` varchar(45) NOT NULL,
  `start_date` varchar(45) NOT NULL,
  `end_date` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `description` varchar(150) NOT NULL,
  `image` varchar(400) NOT NULL,
  PRIMARY KEY (`vacation_id`),
  UNIQUE KEY `vacation_id_UNIQUE` (`vacation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (1,'Paris','2022-04-27','2022-04-27','200$','Lovely Paris','https://cdn.getyourguide.com/img/location/5ffeb392eb81e.jpeg/68.jpg'),(2,'London','2022-04-27','2022-04-27','300$','That\'s London','https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE'),(3,'Rome','2022-04-27','2022-04-27','270$','The culture of Rome','https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg'),(4,'Barcelona','2022-04-27','2022-04-27','320$','Enjoy the beautiful city','http://blog.goway.com/globetrotting/wp-content/uploads/2016/02/Barcelona-at-Night-with-Sagrada-Familia-Spain_178539545-735x490.jpg'),(5,'Berlin','2022-04-27','2022-04-27','220$','The best place for nightlife','https://media.timeout.com/images/105303515/750/422/image.jpg'),(6,'New-York','2022-04-13','2022-04-12','500$','The Big Appl','https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg'),(7,'Prague','2022-05-05','2022-05-06','200$','The history Of Prague','https://telavivmedicalcollege.co.il/wp-content/uploads/2020/12/czech-republic-prague-itineraries-for-travelers-one-day-itinerary-old-town-square.jpg'),(8,'Milano','2022-05-05','2022-05-06','320$','Food & Wine ','https://media.timeout.com/images/105186767/750/422/image.jpg');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-17 23:50:44
