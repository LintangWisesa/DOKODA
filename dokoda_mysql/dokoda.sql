-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: dokoda
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dantri`
--

DROP TABLE IF EXISTS `dantri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dantri` (
  `dastr` varchar(255) DEFAULT NULL,
  `dano` int(11) NOT NULL DEFAULT '0',
  `dastatus` set('on','off','rest') DEFAULT NULL,
  UNIQUE KEY `dastr` (`dastr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dantri`
--

LOCK TABLES `dantri` WRITE;
/*!40000 ALTER TABLE `dantri` DISABLE KEYS */;
INSERT INTO `dantri` VALUES ('12.1.1.123.1.12.123456',1,'on'),('12.1.1.123.1.12.123457',0,'off'),('12.1.1.123.1.12.123458',0,'off'),('22.2.2.223.1.12.654321',0,'off'),('22.2.2.223.1.12.654322',0,'off'),('22.2.2.223.1.12.654323',0,'off'),('33.3.3.111.1.12.789789',0,'off'),('33.3.3.111.1.12.789790',0,'off');
/*!40000 ALTER TABLE `dantri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dokter`
--

DROP TABLE IF EXISTS `dokter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dokter` (
  `dstr` varchar(255) NOT NULL,
  `dnama` varchar(255) DEFAULT NULL,
  `dsex` set('pria','wanita') DEFAULT NULL,
  `duniv` varchar(255) DEFAULT NULL,
  `dkompetensi` varchar(255) DEFAULT NULL,
  `demail` varchar(255) DEFAULT NULL,
  `dpassword` varchar(255) DEFAULT NULL,
  `dstrawal` date DEFAULT NULL,
  `dstrakhir` date DEFAULT NULL,
  `dkabkota` varchar(255) DEFAULT NULL,
  `dlokasipraktek` int(11) DEFAULT NULL,
  `drating` int(11) DEFAULT NULL,
  `dfoto` varchar(255) DEFAULT NULL,
  `djadwal` varchar(255) DEFAULT 'Senin - Sabtu',
  `djam` varchar(255) DEFAULT '09.00 - 18.00',
  PRIMARY KEY (`dstr`),
  UNIQUE KEY `str` (`dstr`),
  UNIQUE KEY `email` (`demail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dokter`
--

LOCK TABLES `dokter` WRITE;
/*!40000 ALTER TABLE `dokter` DISABLE KEYS */;
INSERT INTO `dokter` VALUES ('12.1.1.123.1.12.123456','dr. Ali, Sp.PD','pria','Universitas Hahahihi','Spesialis Penyakit Dalam','ali@dok.com','12345','2000-12-12','2020-12-12','Jakarta Pusat',1234321,5,'http://localhost:1234/foto/doctor_1.png','Senin - Sabtu','09.00 - 18.00'),('12.1.1.123.1.12.123457','dr. Atikah, Sp.A','wanita','Universitas Wekaweka','Spesialis Anak','atikah@dok.com','12345','2000-12-12','2020-12-12','Surakarta',1234321,5,'http://localhost:1234/foto/doctor_5.png','Senin - Sabtu','09.00 - 18.00'),('12.1.1.123.1.12.123458','dr. Arnold, Sp.Pd','pria','Universitas Wekaweka','Spesialis Penyakit Dalam','arnold@dok.com','12345','2000-12-12','2020-12-12','Jakarta Selatan',1234321,5,'http://localhost:1234/foto/doctor_2.png','Senin - Sabtu','09.00 - 18.00'),('22.2.2.223.1.12.654321','dr. Bebi, Sp.Pd','wanita','Universitas Kocakali','Spesialis Penyakit Dalam','bebi@dok.com','12345','2000-12-12','2020-12-12','Jakarta Utara',1234567,5,'http://localhost:1234/foto/doctor_6.png','Senin - Sabtu','09.00 - 18.00'),('22.2.2.223.1.12.654322','dr. Bambang, Sp.A','pria','Universitas Wekaweka','Spesialis Anak','bams@dok.com','12345','2000-12-12','2020-12-12','Jakarta Selatan',1234567,5,'http://localhost:1234/foto/doctor_3.png','Senin - Sabtu','09.00 - 18.00'),('22.2.2.223.1.12.654323','dr. Bonita, Sp.A','wanita','Universitas Hahahihi','Spesialis Anak','bonita@dok.com','12345','2000-12-12','2020-12-12','Jakarta Pusat',1234567,5,'http://localhost:1234/foto/doctor_7.png','Senin - Sabtu','09.00 - 18.00'),('33.3.3.111.1.12.789789','dr. Chiko, Sp.Pd','pria','Universitas Hahahihi','Spesialis Penyakit Dalam','chiko@dok.com','12345','2000-12-12','2020-12-12','Jakarta Selatan',7654321,5,'http://localhost:1234/foto/doctor_4.png','Senin - Sabtu','09.00 - 18.00'),('33.3.3.111.1.12.789790','dr. Cici, Sp.Pd','wanita','Universitas Kocakali','Spesialis Penyakit Dalam','cici@dok.com','12345','2000-12-12','2020-12-12','Jakarta Utara',7654321,5,'http://localhost:1234/foto/doctor_8.png','Senin - Sabtu','09.00 - 18.00');
/*!40000 ALTER TABLE `dokter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pantri`
--

DROP TABLE IF EXISTS `pantri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pantri` (
  `pano` int(11) NOT NULL DEFAULT '0',
  `padstr` varchar(255) DEFAULT NULL,
  `papktp` varchar(255) DEFAULT NULL,
  `patime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `pakeluhan` varchar(255) DEFAULT NULL,
  `pastatus` set('selesai','belum') DEFAULT 'belum'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pantri`
--

LOCK TABLES `pantri` WRITE;
/*!40000 ALTER TABLE `pantri` DISABLE KEYS */;
INSERT INTO `pantri` VALUES (1,'12.1.1.123.1.12.123456','3311122611916969','2019-08-25 06:34:12','mual, ngantuk, lapar','selesai');
/*!40000 ALTER TABLE `pantri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pasien`
--

DROP TABLE IF EXISTS `pasien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `pasien` (
  `pktp` varchar(255) NOT NULL,
  `pbpjs` varchar(255) DEFAULT NULL,
  `pnama` varchar(255) DEFAULT NULL,
  `ptgl_lahir` date DEFAULT NULL,
  `psex` set('pria','wanita') DEFAULT NULL,
  `palamat` varchar(255) DEFAULT NULL,
  `pemail` varchar(255) DEFAULT NULL,
  `ppassword` varchar(255) DEFAULT NULL,
  `ptelp` varchar(255) DEFAULT NULL,
  `prekmed` varchar(255) DEFAULT NULL,
  `pfoto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pktp`),
  UNIQUE KEY `email` (`pemail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pasien`
--

LOCK TABLES `pasien` WRITE;
/*!40000 ALTER TABLE `pasien` DISABLE KEYS */;
INSERT INTO `pasien` VALUES ('1122334455667788','12341234123','Budianto','1992-11-02','pria','Jl. Mantul Jakarta Selatan','budi@user.com','12345','021-998899','7788Budianto','http://localhost:1234/foto/pas_2.jpg'),('1234123412341234','12345678910','Affandi','1991-01-02','pria','Jl. Oke Jakarta Pusat','affandi@user.com','12345','021-676767','1234Affandi','http://localhost:1234/foto/pas_1.jpg'),('3311122611916969','12345543219','Lintang Wisesa','1992-11-26','pria','Jl. Koding No.314 BSD','lintangwisesa@ymail.com','12345','08886719327','6969Lintang','http://localhost:1234/foto/pas_3.png');
/*!40000 ALTER TABLE `pasien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating`
--

DROP TABLE IF EXISTS `rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rating` (
  `dstr` varchar(255) DEFAULT NULL,
  `pktp` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating`
--

LOCK TABLES `rating` WRITE;
/*!40000 ALTER TABLE `rating` DISABLE KEYS */;
INSERT INTO `rating` VALUES ('12.1.1.123.1.12.123456','3311122611916969',5);
/*!40000 ALTER TABLE `rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rekammedis`
--

DROP TABLE IF EXISTS `rekammedis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rekammedis` (
  `rmno` varchar(255) DEFAULT NULL,
  `dstr` varchar(255) DEFAULT NULL,
  `pano` int(11) DEFAULT NULL,
  `rmperiksa` varchar(255) DEFAULT NULL,
  `rmdiagnosa` varchar(255) DEFAULT NULL,
  `rmtindakan` varchar(255) DEFAULT NULL,
  `rmalergi` varchar(255) DEFAULT NULL,
  `rmresep` varchar(255) DEFAULT NULL,
  `rmkesimpulan` varchar(255) DEFAULT NULL,
  `rmkondisiout` varchar(255) DEFAULT NULL,
  `rmtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rekammedis`
--

LOCK TABLES `rekammedis` WRITE;
/*!40000 ALTER TABLE `rekammedis` DISABLE KEYS */;
INSERT INTO `rekammedis` VALUES ('6969Lintang','12.1.1.123.1.12.123456',NULL,'123','123','123','123','123','123','123','2019-08-24 18:26:49'),('6969Lintang','12.1.1.123.1.12.123456',NULL,'medical checkup','jantung koroner','operasi','-','decolgen','parah','biasa aja','2019-08-25 01:46:09'),('6969Lintang','12.1.1.123.1.12.123456',NULL,'wqeqweq','werew','rewre','wrew','rewre','wrew','rewrew','2019-08-25 03:19:22'),('6969Lintang','12.1.1.123.1.12.123456',NULL,'12345','hjkh','jkhkj','hkj','hjk','hkj','hjk','2019-08-25 04:07:54'),('6969Lintang','12.1.1.123.1.12.123456',NULL,'12345','','','','','','','2019-08-25 04:20:11'),('6969Lintang','12.1.1.123.1.12.123456',NULL,'12345','','','','','','','2019-08-25 06:37:43');
/*!40000 ALTER TABLE `rekammedis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rumahsakit`
--

DROP TABLE IF EXISTS `rumahsakit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `rumahsakit` (
  `rskode` int(11) NOT NULL,
  `rstglreg` date DEFAULT NULL,
  `rsnama` varchar(255) DEFAULT NULL,
  `rsjenis` varchar(255) DEFAULT NULL,
  `rskelas` varchar(10) DEFAULT NULL,
  `rsdirektur` varchar(255) DEFAULT NULL,
  `rspemilik` varchar(255) DEFAULT NULL,
  `rsalamat` varchar(255) DEFAULT NULL,
  `rskabkota` varchar(255) DEFAULT NULL,
  `rstelp` varchar(255) DEFAULT NULL,
  `rsemail` varchar(255) DEFAULT NULL,
  `rspassword` varchar(255) DEFAULT NULL,
  `rsweb` varchar(255) DEFAULT NULL,
  `rsrating` int(11) DEFAULT '5',
  `rsimg` varchar(255) DEFAULT 'https://www.emerus.com/em-assets/uploads/ahn-mccandless-pr.jpg',
  PRIMARY KEY (`rskode`),
  UNIQUE KEY `kode` (`rskode`),
  UNIQUE KEY `email` (`rsemail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rumahsakit`
--

LOCK TABLES `rumahsakit` WRITE;
/*!40000 ALTER TABLE `rumahsakit` DISABLE KEYS */;
INSERT INTO `rumahsakit` VALUES (1234321,'2012-08-17','RS. Seger Buger','RSU','A','Dr. Cecep, Sp.A','Swasta','Jl. Hayang Seuri 123, Tangerang Selatan','Tangerang Selatan','021654321',NULL,'12345','hseuri.org',5,'http://localhost:1234/foto/rs_1.png'),(1234567,'1991-11-26','RS. Sehat Waras','RSU','A','Prof. Dr. Maurinho','Swasta','Jl. Mantap Jiwa 123, Tangerang Selatan','Tangerang Selatan','021123123',NULL,'12345','mantapjiwa.id',5,'http://localhost:1234/foto/rs_2.png'),(7654321,'1992-12-21','RS. Mantap Jiwa','RSU','A','Dr. Atta, Sp.Og','Swasta','Jl. Ashiaaap 123, Tangerang Selatan','Tangerang Selatan','021765765',NULL,'12345','ashiaap.com',5,'http://localhost:1234/foto/rs_3.png');
/*!40000 ALTER TABLE `rumahsakit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-26  9:30:47
