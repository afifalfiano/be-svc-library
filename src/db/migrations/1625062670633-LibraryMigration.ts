import {MigrationInterface, QueryRunner} from "typeorm";

export class LibraryMigration1625062670633 implements MigrationInterface {
    name = 'LibraryMigration1625062670633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `author_book` (`id` int NOT NULL AUTO_INCREMENT, `nama` varchar(255) NOT NULL, `asal` varchar(255) NOT NULL, `tgl_lahir` date NOT NULL, `tgl_input` timestamp NULL, `user_input` varchar(255) NULL, `tgl_update` timestamp NULL, `user_update` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book` (`id` int NOT NULL AUTO_INCREMENT, `judul` varchar(255) NOT NULL, `pengarang` varchar(255) NOT NULL, `penerbit` varchar(255) NOT NULL, `tahun_terbit` int NOT NULL, `tgl_input` timestamp NULL, `user_input` varchar(255) NULL, `tgl_update` timestamp NULL, `user_update` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `borrower` (`id` int NOT NULL AUTO_INCREMENT, `id_buku` int NOT NULL, `id_anggota` int NOT NULL, `tgl_pinjam` date NOT NULL, `tgl_kembali` date NOT NULL, `tgl_input` timestamp NULL, `user_input` varchar(255) NULL, `tgl_update` timestamp NULL, `user_update` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `member` (`id` int NOT NULL AUTO_INCREMENT, `nama` varchar(255) NOT NULL, `jenis_kelamin` enum ('Male', 'Female', 'Other') NOT NULL, `tgl_lahir` date NOT NULL, `alamat` varchar(255) NOT NULL, `kontak` int NOT NULL, `tgl_input` timestamp NULL, `user_input` varchar(255) NULL, `tgl_update` timestamp NULL, `user_update` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `publisher` (`id` int NOT NULL AUTO_INCREMENT, `nama` varchar(255) NOT NULL, `tgl_input` timestamp NULL, `user_input` varchar(255) NULL, `tgl_update` timestamp NULL, `user_update` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `publisher`");
        await queryRunner.query("DROP TABLE `member`");
        await queryRunner.query("DROP TABLE `borrower`");
        await queryRunner.query("DROP TABLE `book`");
        await queryRunner.query("DROP TABLE `author_book`");
    }

}
